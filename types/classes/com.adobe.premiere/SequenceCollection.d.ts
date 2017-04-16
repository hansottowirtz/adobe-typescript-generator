/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class SequenceCollection extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly numSequences: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Premiere.Sequence}
			 */
			[idx: number]: Adobe.Premiere.Sequence;
		}
	}
}