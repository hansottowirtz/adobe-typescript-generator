/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Time extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly seconds: number;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly ticks: string;
		}
	}
}