/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class RasterizeType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Rasterizes all vector data on the layer. */
			public static readonly ENTIRELAYER: Adobe.Photoshop.RasterizeType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Rasterizes the fill of a shape layer, leaving the vector 
			 * mask.
			 */
			public static readonly FILLCONTENT: Adobe.Photoshop.RasterizeType;
			/**
			 * Rasterizes the vector mask of a shape layer, turning it into 
			 * a layer mask.
			 */
			public static readonly LAYERCLIPPINGPATH: Adobe.Photoshop.RasterizeType;
			/** Rasterizes the selected layers. */
			public static readonly LINKEDLAYERS: Adobe.Photoshop.RasterizeType;
			/** Rasterizes a shape layer. */
			public static readonly SHAPE: Adobe.Photoshop.RasterizeType;
			/**
			 * Rasterizes the type on a type layer. Doesn't rasterize any 
			 * other vector data on the layer.
			 */
			public static readonly TEXTCONTENTS: Adobe.Photoshop.RasterizeType;
			/** Constructor */
			public constructor();
		}
	}
}