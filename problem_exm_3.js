
// JavaScript: Champions League Teams

// In this challenge, the given REST API contains information about football matches played in the years 2011-2015.

// Given a year and integer k, denoting the minimum number of matches we are interested in, your task is to use the API to get the names of teams that played at least k matches in the given year in the competition named UEFA Champions League. The names must be returned as an array and ordered in ascending order.

// The given API uses pagination to return the data divided into pages. Fetching the whole data available on the API requires multiple requests.
// To get a single page of matches played in UEFA Champions League in the given year, perform HTTP GET request to:

// https://jsonmock.hackerrank.com/api/fo otball_matches? competition=UEFA Champions Le ague&year=<year>&page= <pageNumber>

// where <year> denotes the year of the match and <pageNumber> is an integer denoting the page of the results we are requesting.

// For example, a GET request to https://jsonmock.hackerrank.com/api/footb all matches? competition=UEFA Champions Leag ue&year=2011&page=2 will return page 2 of the collection of matches played in the UEFA Champions League in the year 2011. Pages are numbered from 1, so in order to access the first page, you need to ask for page number
// The response to such request is a JSON with the following 5 fields:

// page: The current page of the results.

// per_page: The maximum number of matches returned per page.

// • total: The total number of matches on all pages of the result.

// total_pages: The total number of pages with results.

// data: An array of objects containing matches information on the requested page

// Each match record has several fields, but in this task only these two are relevant:

// team1: The name of the first team in the

// match.

// team2: The name of the second team in the match,

// It is guaranteed that there exists at least one team that will be included in the
// Function Description

// Complete the function get Teams in the editor below.

// getTeams has the following parameters: int year: the year being queried int k: the minimum matches that a team must have played during the given year to be included in the result Returns:

// string[]: an array denoting the names of teams that played at least k matches in the UEFA Champions League in the given year, returned in ascending order

async function getTeams(year, k) {
    const allMatches = [];
    let totalPages = 1;

    // Get the first page of matches
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    totalPages = data.total_pages;
    allMatches.push(...data.data);

    // Get all the matches from the remaining pages
    for (let i = 2; i <= totalPages; i++) {
        url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`;
        response = await fetch(url);
        data = await response.json();
        allMatches.push(...data.data);
    }

    // Count the number of matches played by each team
    const teamFrequency = {};
    for (const match of allMatches) {
        if (match.team1 in teamFrequency) {
            teamFrequency[match.team1]++;
        } else {
            teamFrequency[match.team1] = 1;
        }
        if (match.team2 in teamFrequency) {
            teamFrequency[match.team2]++;
        } else {
            teamFrequency[match.team2] = 1;
        }
    }

    // Filter the teams based on the criteria mentioned in the problem statement
    const filteredTeams = Object.keys(teamFrequency).filter(team => teamFrequency[team] >= k);

    // Return the filtered teams in ascending order
    return filteredTeams.sort();
}


async function getTeams(year, k) {
    const allMatches = [];
    let totalPages = 1;

    // Get the first page of matches
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    totalPages = data.total_pages;
    allMatches.push(...data.data);

    // Get all the matches from the remaining pages
    for (let i = 2; i <= totalPages; i++) {
        url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`;
        response = await fetch(url);
        data = await response.json();
        allMatches.push(...data.data);
    }

    // Count the number of matches played by each team
    const teamFrequency = {};
    for (const match of allMatches) {
        if (match.team1 in teamFrequency) {
            teamFrequency[match.team1]++;
        } else {
            teamFrequency[match.team1] = 1;
        }
        if (match.team2 in teamFrequency) {
            teamFrequency[match.team2]++;
        } else {
            teamFrequency[match.team2] = 1;
        }
    }

    // Filter the teams based on the criteria mentioned in the problem statement
    const filteredTeams = Object.keys(teamFrequency).filter(team => teamFrequency[team] >= k);

    // Return the filtered teams in ascending order
    return filteredTeams.sort();
}
getTeams(2011, 10)
