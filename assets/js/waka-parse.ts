// Copyright 2021 alainQtec
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This is written for Deno, not node.js

import { readJson } from "https://deno.land/std@0.63.0/fs/read_json.ts"

/*
A script I wrote to parse the data you can download from WakaTime, to display how many hours you spent working on specific
projects.
*/

interface Duration {
	total_seconds: number
}

interface Project {
	grand_total: Duration
	name: string
}

interface Day {
	categories: []
	date: string
	dependencies: []
	editors: []
	grand_total: {
		total_seconds: number
	}
	languages: []
	machines: []
	operating_systems: []
	projects: Project[]
}

interface WakaTimeObj {
	days: Day[]
	range: {
		start: number
		end: number
	}
	user: Object
}

const d: any = await readJson("./JSON-FILE-FROM-WAKATIME.json")
const data: WakaTimeObj = d

const projCompilation: { [key: string]: number } = data.days.reduce(
	(acc, day) => {
		const ob: any = { ...acc }
		day.projects.forEach(
			(p) =>
				(ob[p.name] = ob[p.name]
					? ob[p.name] + p.grand_total.total_seconds
					: p.grand_total.total_seconds)
		)
		return ob
	},
	{}
)

const secToHrs = (sec: number) => sec / 60 / 60

Object.keys(projCompilation)
	.sort()
	.forEach((a) => console.log(a, secToHrs(projCompilation[a])))

console.log("From:", new Date(data.range.start * 1000))
console.log("To:", new Date(data.range.end * 1000))