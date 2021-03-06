/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class TrackCollection extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly numTracks: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Premiere.Track}
			 */
			[idx: number]: Adobe.Premiere.Track;
		}
	}
}