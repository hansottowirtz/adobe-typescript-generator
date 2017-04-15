/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ShapeOperation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Adds the shapes. */
			public static readonly SHAPEADD: Adobe.Photoshop.ShapeOperation;
			/**
			 * The resulting shape is the area of intersection between the 
			 * two shapes.
			 */
			public static readonly SHAPEINTERSECT: Adobe.Photoshop.ShapeOperation;
			/**
			 * Subtracts the loaded shape from the selection is the 
			 * destination image.
			 */
			public static readonly SHAPESUBTRACT: Adobe.Photoshop.ShapeOperation;
			/**
			 * Replaces the shape in the destination image with the loaded 
			 * selection.
			 */
			public static readonly SHAPEXOR: Adobe.Photoshop.ShapeOperation;
			/** Constructor */
			public constructor();
		}
	}
}