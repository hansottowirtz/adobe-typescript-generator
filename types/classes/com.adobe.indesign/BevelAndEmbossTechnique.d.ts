/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BevelAndEmbossTechnique extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Emboss and bevel contours are chiseled and have hard 
			 * corners.
			 */
			public static readonly CHISEL_HARD: Adobe.Indesign.BevelAndEmbossTechnique;
			/** Emboss or bevel contours chiseled but softened somewhat. */
			public static readonly CHISEL_SOFT: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for CHISEL_HARD. Emboss and bevel contours are 
			 * chiseled and have hard corners.
			 */
			public static readonly chiselHard: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for CHISEL_SOFT. Emboss or bevel contours chiseled but 
			 * softened somewhat.
			 */
			public static readonly chiselSoft: Adobe.Indesign.BevelAndEmbossTechnique;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Emboss and bevel contours are smooth. */
			public static readonly SMOOTH_CONTOUR: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for SMOOTH_CONTOUR. Emboss and bevel contours are 
			 * smooth.
			 */
			public static readonly smoothContour: Adobe.Indesign.BevelAndEmbossTechnique;
			/** Constructor */
			public constructor();
		}
	}
}