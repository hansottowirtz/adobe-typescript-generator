/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PlacedItem extends PageItem {
			/**
			 * Dimensions of placed art object, regardless of 
			 * transformations.
			 */
			public readonly boundingBox: any[];
			/** The content variable bound to this placed art object. */
			public contentVariable: any;
			/** The file containing the placed artwork. */
			public file: File;
			/** The transformation matrix of the placed art object. */
			public matrix: Matrix;
			/** Embed the placed art within the illustration. */
			public embed(): void;
			/**
			 * Trace this raster object using default options. Reorders 
			 * this placed to the source art.
			 */
			public trace(): PluginItem;
		}
	}
}