/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ArtLayers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** Create an Art Layer */
			public add(): Adobe.Photoshop.ArtLayer;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam - 
			 */
			public getByName(nameParam: string): Adobe.Photoshop.ArtLayer;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx - 
			 */
			public index(idx: number): Adobe.Photoshop.ArtLayer;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}