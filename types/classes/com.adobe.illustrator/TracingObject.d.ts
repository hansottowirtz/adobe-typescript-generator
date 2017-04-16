/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A tracing object. */
		class TracingObject extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The number of anchors in the tracing result. */
			public readonly anchorCount: number;
			/** The number of paths in the tracing result. */
			public readonly pathCount: number;
			/** The source art used when creating a new tracing object. */
			public readonly sourceArt: Adobe.Illustrator.PageItem;
			/** The options used when tracing the artwork. */
			public readonly tracingOptions: Adobe.Illustrator.TracingOptions;
			/** The number of colors used in the tracing result. */
			public readonly usedColorCount: number;
			/**
			 * Expand the tracing to paths.  Deletes this tracing object.
			 * @param {boolean} viewed expand as viewed with the raster and 
			 * vector view modes. ( default: false )
			 */
			public expandTracing(viewed: boolean): Adobe.Illustrator.GroupItem;
			/**
			 * Release the source artwork for the tracing object.  Deletes 
			 * this tracing object.
			 */
			public releaseTracing(): Adobe.Illustrator.PageItem;
		}
	}
}