/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Track extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.TrackItemCollection}
			 * @readonly
			 */
			public readonly clips: Adobe.Premiere.TrackItemCollection;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly mediaType: string;
			/**
			 * @type {Adobe.Premiere.TrackItemCollection}
			 * @readonly
			 */
			public readonly transitions: Adobe.Premiere.TrackItemCollection;
		}
	}
}