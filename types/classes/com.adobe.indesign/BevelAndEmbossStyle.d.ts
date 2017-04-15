/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BevelAndEmbossStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for EMBOSS. An emboss effect is applied to the object.
			 */
			public static readonly emboss: Adobe.Indesign.BevelAndEmbossStyle;
			/** An emboss effect is applied to the object. */
			public static readonly EMBOSS: Adobe.Indesign.BevelAndEmbossStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The inside edges of the object are beveled. */
			public static readonly INNER_BEVEL: Adobe.Indesign.BevelAndEmbossStyle;
			/**
			 * Alias for INNER_BEVEL. The inside edges of the object are 
			 * beveled.
			 */
			public static readonly innerBevel: Adobe.Indesign.BevelAndEmbossStyle;
			/** The outside edges of the object are beveled. */
			public static readonly OUTER_BEVEL: Adobe.Indesign.BevelAndEmbossStyle;
			/**
			 * Alias for OUTER_BEVEL. The outside edges of the object are 
			 * beveled.
			 */
			public static readonly outerBevel: Adobe.Indesign.BevelAndEmbossStyle;
			/** An emboss effect is applied to the edges of the object. */
			public static readonly PILLOW_EMBOSS: Adobe.Indesign.BevelAndEmbossStyle;
			/**
			 * Alias for PILLOW_EMBOSS. An emboss effect is applied to the 
			 * edges of the object.
			 */
			public static readonly pillowEmboss: Adobe.Indesign.BevelAndEmbossStyle;
			/** Constructor */
			public constructor();
		}
	}
}