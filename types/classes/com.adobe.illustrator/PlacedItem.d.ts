/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Placed artwork item */
		class PlacedItem extends Adobe.Illustrator.PageItem {
			/**
			 * dimensions of placed art object, regardless of 
			 * transformations
			 */
			public readonly boundingBox: any[];
			/** the content variable bound to this placed art object */
			public contentVariable: any;
			/** the file containing the placed artwork */
			public file: File;
			/** The transformation matrix of the placed art object */
			public matrix: Adobe.Illustrator.Matrix;
			/** Embed the placed art within the illustration */
			public embed(): void;
			/**
			 * Relink the placed art with supplied art from file
			 * @param {File} fileSpec file spec to relink from
			 */
			public relink(fileSpec: File): void;
			/**
			 * Trace this raster object using default options.  Reorders 
			 * this placed to the source art.
			 */
			public trace(): Adobe.Illustrator.PluginItem;
		}
	}
}