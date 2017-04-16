/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BevelAndEmbossTechnique extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Emboss and bevel contours are chiseled and have hard 
			 * corners.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly CHISEL_HARD: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Emboss or bevel contours chiseled but softened somewhat.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly CHISEL_SOFT: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for CHISEL_HARD. Emboss and bevel contours are 
			 * chiseled and have hard corners.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly chiselHard: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for CHISEL_SOFT. Emboss or bevel contours chiseled but 
			 * softened somewhat.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly chiselSoft: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Emboss and bevel contours are smooth.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly SMOOTH_CONTOUR: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Alias for SMOOTH_CONTOUR. Emboss and bevel contours are 
			 * smooth.
			 * @type {Adobe.Indesign.BevelAndEmbossTechnique}
			 * @readonly
			 */
			public static readonly smoothContour: Adobe.Indesign.BevelAndEmbossTechnique;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}