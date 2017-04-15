/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InkTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Uses traditional process inks and most 
			 * spot inks.
			 */
			public static readonly normal: Adobe.Indesign.InkTypes;
			/** Uses traditional process inks and most spot inks. */
			public static readonly NORMAL: Adobe.Indesign.InkTypes;
			/**
			 * Alias for OPAQUE. Uses heavy, nontransparent inks to prevent 
			 * trapping of underlying colors but allow for trapping along 
			 * the edges of the ink. Best for metallic inks.
			 */
			public static readonly opaque: Adobe.Indesign.InkTypes;
			/**
			 * Uses heavy, nontransparent inks to prevent trapping of 
			 * underlying colors but allow for trapping along the edges of 
			 * the ink. Best for metallic inks.
			 */
			public static readonly OPAQUE: Adobe.Indesign.InkTypes;
			/**
			 * Uses heavy, nontransparent inks to prevent trapping of 
			 * underlying colors but allow for trapping along the edges of 
			 * the ink. Best for inks that have undesirable interactions 
			 * with other inks.
			 */
			public static readonly OPAQUE_IGNORE: Adobe.Indesign.InkTypes;
			/**
			 * Alias for OPAQUE_IGNORE. Uses heavy, nontransparent inks to 
			 * prevent trapping of underlying colors but allow for trapping 
			 * along the edges of the ink. Best for inks that have 
			 * undesirable interactions with other inks.
			 */
			public static readonly opaqueIgnore: Adobe.Indesign.InkTypes;
			/**
			 * Alias for TRANSPARENT. Uses clear inks to ensure that 
			 * underlying items trap. Best for varnishes and dieline inks.
			 */
			public static readonly transparent: Adobe.Indesign.InkTypes;
			/**
			 * Uses clear inks to ensure that underlying items trap. Best 
			 * for varnishes and dieline inks.
			 */
			public static readonly TRANSPARENT: Adobe.Indesign.InkTypes;
			/** Constructor */
			public constructor();
		}
	}
}