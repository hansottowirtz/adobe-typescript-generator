/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ClippingPathType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The clipping path is based on an alpha channel defined for 
			 * the graphic in a graphics application.
			 */
			public static readonly ALPHA_CHANNEL: Adobe.Incopy.ClippingPathType;
			/**
			 * Alias for ALPHA_CHANNEL. The clipping path is based on an 
			 * alpha channel defined for the graphic in a graphics 
			 * application.
			 */
			public static readonly alphaChannel: Adobe.Incopy.ClippingPathType;
			/**
			 * The clipping path is based on pixel value threshold and 
			 * tolerance.
			 */
			public static readonly DETECT_EDGES: Adobe.Incopy.ClippingPathType;
			/**
			 * Alias for DETECT_EDGES. The clipping path is based on pixel 
			 * value threshold and tolerance.
			 */
			public static readonly detectEdges: Adobe.Incopy.ClippingPathType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. No clipping path applied. */
			public static readonly none: Adobe.Incopy.ClippingPathType;
			/** No clipping path applied. */
			public static readonly NONE: Adobe.Incopy.ClippingPathType;
			/** The clipping path is defined for the graphic in Photoshop. */
			public static readonly PHOTOSHOP_PATH: Adobe.Incopy.ClippingPathType;
			/**
			 * Alias for PHOTOSHOP_PATH. The clipping path is defined for 
			 * the graphic in Photoshop.
			 */
			public static readonly photoshopPath: Adobe.Incopy.ClippingPathType;
			/** (Read-only) The clipping path has been manually edited. */
			public static readonly USER_MODIFIED_PATH: Adobe.Incopy.ClippingPathType;
			/**
			 * Alias for USER_MODIFIED_PATH. (Read-only) The clipping path 
			 * has been manually edited.
			 */
			public static readonly userModifiedPath: Adobe.Incopy.ClippingPathType;
			/** Constructor */
			public constructor();
		}
	}
}