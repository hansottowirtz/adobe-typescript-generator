/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InnerGlowSource extends Adobe.Csawlib.CSEnumBase {
			/** The glow radiates from the object's center. */
			public static readonly CENTER_SOURCED: Adobe.Indesign.InnerGlowSource;
			/**
			 * Alias for CENTER_SOURCED. The glow radiates from the 
			 * object's center.
			 */
			public static readonly centerSourced: Adobe.Indesign.InnerGlowSource;
			/** The glow radiates from the edge of the object. */
			public static readonly EDGE_SOURCED: Adobe.Indesign.InnerGlowSource;
			/**
			 * Alias for EDGE_SOURCED. The glow radiates from the edge of 
			 * the object.
			 */
			public static readonly edgeSourced: Adobe.Indesign.InnerGlowSource;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}