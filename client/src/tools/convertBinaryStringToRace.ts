import { SpeedwayMatch, SpeedwayRiderGameStats } from "../types/speedwayRacingTypes"

export const convert = (bs:string): SpeedwayMatch => {
    bs = [...bs].map(x => 'ÃÂ'.includes(x) ? '' : x).join('');
    bs = [...bs].map(x => [13, 10].includes(x.charCodeAt(0)) ? ' ' : x).join('')
    console.log(bs)
    let me = {teamName: [], matchDate: '', teamSquad: []} as SpeedwayMatch;
    me = extractTeamName(bs, me);
    me = extractMatchDate(bs, me);
    me = extractTeamSquad(bs, me);
    return me;
}

const extractTeamName = (bs: string, me: SpeedwayMatch): SpeedwayMatch => {
    const rawData = bs.match(/(?<=<title>).+(?=<\/title>)/)
    me.teamName = rawData ? rawData[0].split(' - ') : []
    for(let i = 0; i < me.teamName.length; i++) me.teamName[i] = decodeToLatin(me.teamName[i])
    return me;
}

const extractMatchDate = (bs: string, me: SpeedwayMatch): SpeedwayMatch => {
    const rawData = bs.match(/(?<=\d{4}:\s)\d\d-\d-\d{4}(?=<\/tt>)/)
    me.matchDate = rawData ? rawData[0] : ''
    return me;
}

const extractTeamSquad = (bs: string, me: SpeedwayMatch): SpeedwayMatch => {
    const rawData = bs.match(/(?<=<tt><br><br>).+(?=<br><br>)/)
    // home - away
    const squads = rawData ? rawData[0].split(/<br>\s+\d\d:\d\d<br>/).reverse() : []
    if(squads){
        for(let i = 0; i < squads.length; i++){
            const ridersStats = [] as SpeedwayRiderGameStats[]
            const ridersSquadRaw = squads[i].split('<br>')
            ridersSquadRaw.forEach((riderRaw) => {
                ridersStats.push(extractRiderStats(riderRaw))
                ridersStats[ridersStats.length - 1].date = me.matchDate
        })
            me.teamSquad.push(ridersStats)
        }
    }
    return me;
}

const extractRiderStats = (raw: string): SpeedwayRiderGameStats => {
    const res = {} as SpeedwayRiderGameStats
    const ridersRawData = raw.split(/\s+/)
    res.startingNumber = ridersRawData[1]
    res.name = ridersRawData[2].match(/.+(?=\.)/)![0]

    res.surname = decodeToLatin(ridersRawData[2].match(/(?<=\.).+/)![0])
    console.log([...res.surname].map(x => x.charCodeAt(0)))
    res.surname = res.surname[0] + res.surname.substring(1).toLowerCase()
    res.ns = ridersRawData[3] === 'ns'
    res.pointsRecord = !res.ns ? ridersRawData[4] : ''
    return res
}

const decodeToLatin = (s: string):string => {
    const latin = 'łŃŁŚŹĘŃĘ';
    const encodedLettersCodes = [179, 209, 163, 166, 172, 202, 145, 138]
    return [...s].map(x => encodedLettersCodes.includes(x.charCodeAt(0)) ? latin[encodedLettersCodes.indexOf(x.charCodeAt(0))] : x).join('');
}