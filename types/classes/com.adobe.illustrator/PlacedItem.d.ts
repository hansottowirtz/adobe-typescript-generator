/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Placed artwork item */
		class PlacedItem extends Adobe.Illustrator.PageItem {
			/**
			 * dimensions of placed art object, regardless of 
			 * transformations
			 * @type {any[]}
			 * @readonly
			 */
			public readonly boundingBox: any[];
			/**
			 * the content variable bound to this placed art object
			 * @type {any}
			 */
			public contentVariable: any;
			/**
			 * the file containing the placed artwork
			 * @type {File}
			 */
			public file: File;
			/**
			 * The transformation matrix of the placed art object
			 * @type {Adobe.Illustrator.Matrix}
			 */
			public matrix: Adobe.Illustrator.Matrix;
			/**
			 * Embed the placed art within the illustration
			 * @returns {void}
			 */
			public embed(): void;
			/**
			 * Relink the placed art with supplied art from file
			 * @param {File} fileSpec file spec to relink from
			 * @returns {void}
			 */
			public relink(fileSpec: File): void;
			/**
			 * Trace this raster object using default options.  Reorders 
			 * this placed to the source art.
			 * @returns {Adobe.Illustrator.PluginItem}
			 */
			public trace(): Adobe.Illustrator.PluginItem;
		}
	}
}