/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class TrackItem extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.Time}
			 * @readonly
			 */
			public readonly duration: Adobe.Premiere.Time;
			/**
			 * @type {Adobe.Premiere.Time}
			 * @readonly
			 */
			public readonly end: Adobe.Premiere.Time;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly mediaType: string;
			/**
			 * @type {Adobe.Premiere.Time}
			 * @readonly
			 */
			public readonly start: Adobe.Premiere.Time;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly type: number;
		}
	}
}