/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Guides associated with the document */
		class Guides extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * a guide
			 * @param {Adobe.Photoshop.Direction} direction - indicates 
			 * whether the guide is vertical or horizontal
			 * @param {string} coordinate - location of the guide from 
			 * origin of image
			 */
			public add(direction: Adobe.Photoshop.Direction, coordinate: string): Adobe.Photoshop.Guide;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Photoshop.Guide;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}