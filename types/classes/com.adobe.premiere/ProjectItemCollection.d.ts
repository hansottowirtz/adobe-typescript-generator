/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class ProjectItemCollection extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly numItems: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Premiere.ProjectItem}
			 */
			[idx: number]: Adobe.Premiere.ProjectItem;
		}
	}
}