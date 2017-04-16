/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HorizontalAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Place the anchored object at the center of the reference. */
			public static readonly CENTER_ALIGN: Adobe.Indesign.HorizontalAlignment;
			/**
			 * Alias for CENTER_ALIGN. Place the anchored object at the 
			 * center of the reference.
			 */
			public static readonly centerAlign: Adobe.Indesign.HorizontalAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Place the anchored object to the left of the reference. */
			public static readonly LEFT_ALIGN: Adobe.Indesign.HorizontalAlignment;
			/**
			 * Alias for LEFT_ALIGN. Place the anchored object to the left 
			 * of the reference.
			 */
			public static readonly leftAlign: Adobe.Indesign.HorizontalAlignment;
			/** Place the anchored object to the right of the reference. */
			public static readonly RIGHT_ALIGN: Adobe.Indesign.HorizontalAlignment;
			/**
			 * Alias for RIGHT_ALIGN. Place the anchored object to the 
			 * right of the reference.
			 */
			public static readonly rightAlign: Adobe.Indesign.HorizontalAlignment;
			/** Place the anchored object relative to the text alignment. */
			public static readonly TEXT_ALIGN: Adobe.Indesign.HorizontalAlignment;
			/**
			 * Alias for TEXT_ALIGN. Place the anchored object relative to 
			 * the text alignment.
			 */
			public static readonly textAlign: Adobe.Indesign.HorizontalAlignment;
			/** Constructor */
			public constructor();
		}
	}
}