/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class InkTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Uses traditional process inks and most 
			 * spot inks.
			 */
			public static readonly normal: Adobe.Incopy.InkTypes;
			/** Uses traditional process inks and most spot inks. */
			public static readonly NORMAL: Adobe.Incopy.InkTypes;
			/**
			 * Alias for OPAQUE. Uses heavy, nontransparent inks to prevent 
			 * trapping of underlying colors but allow for trapping along 
			 * the edges of the ink. Best for metallic inks.
			 */
			public static readonly opaque: Adobe.Incopy.InkTypes;
			/**
			 * Uses heavy, nontransparent inks to prevent trapping of 
			 * underlying colors but allow for trapping along the edges of 
			 * the ink. Best for metallic inks.
			 */
			public static readonly OPAQUE: Adobe.Incopy.InkTypes;
			/**
			 * Uses heavy, nontransparent inks to prevent trapping of 
			 * underlying colors but allow for trapping along the edges of 
			 * the ink. Best for inks that have undesirable interactions 
			 * with other inks.
			 */
			public static readonly OPAQUE_IGNORE: Adobe.Incopy.InkTypes;
			/**
			 * Alias for OPAQUE_IGNORE. Uses heavy, nontransparent inks to 
			 * prevent trapping of underlying colors but allow for trapping 
			 * along the edges of the ink. Best for inks that have 
			 * undesirable interactions with other inks.
			 */
			public static readonly opaqueIgnore: Adobe.Incopy.InkTypes;
			/**
			 * Alias for TRANSPARENT. Uses clear inks to ensure that 
			 * underlying items trap. Best for varnishes and dieline inks.
			 */
			public static readonly transparent: Adobe.Incopy.InkTypes;
			/**
			 * Uses clear inks to ensure that underlying items trap. Best 
			 * for varnishes and dieline inks.
			 */
			public static readonly TRANSPARENT: Adobe.Incopy.InkTypes;
			/** Constructor */
			public constructor();
		}
	}
}