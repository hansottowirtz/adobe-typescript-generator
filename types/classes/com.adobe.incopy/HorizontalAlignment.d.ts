/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HorizontalAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Place the anchored object at the center of the reference. */
			public static readonly CENTER_ALIGN: Adobe.Incopy.HorizontalAlignment;
			/**
			 * Alias for CENTER_ALIGN. Place the anchored object at the 
			 * center of the reference.
			 */
			public static readonly centerAlign: Adobe.Incopy.HorizontalAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Place the anchored object to the left of the reference. */
			public static readonly LEFT_ALIGN: Adobe.Incopy.HorizontalAlignment;
			/**
			 * Alias for LEFT_ALIGN. Place the anchored object to the left 
			 * of the reference.
			 */
			public static readonly leftAlign: Adobe.Incopy.HorizontalAlignment;
			/** Place the anchored object to the right of the reference. */
			public static readonly RIGHT_ALIGN: Adobe.Incopy.HorizontalAlignment;
			/**
			 * Alias for RIGHT_ALIGN. Place the anchored object to the 
			 * right of the reference.
			 */
			public static readonly rightAlign: Adobe.Incopy.HorizontalAlignment;
			/** Place the anchored object relative to the text alignment. */
			public static readonly TEXT_ALIGN: Adobe.Incopy.HorizontalAlignment;
			/**
			 * Alias for TEXT_ALIGN. Place the anchored object relative to 
			 * the text alignment.
			 */
			public static readonly textAlign: Adobe.Incopy.HorizontalAlignment;
			/** Constructor */
			public constructor();
		}
	}
}