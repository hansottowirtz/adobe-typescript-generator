/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FitMethodSettings extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Fit to given scale percentage.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly FIT_GIVEN_SCALE_PERCENTAGE: Adobe.Indesign.FitMethodSettings;
			/**
			 * Fit to given width and height.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly FIT_GIVEN_WIDTH_AND_HEIGHT: Adobe.Indesign.FitMethodSettings;
			/**
			 * Fit to predefined settings.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly FIT_PREDEFINED_SETTINGS: Adobe.Indesign.FitMethodSettings;
			/**
			 * Alias for FIT_GIVEN_SCALE_PERCENTAGE. Fit to given scale 
			 * percentage.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly fitGivenScalePercentage: Adobe.Indesign.FitMethodSettings;
			/**
			 * Alias for FIT_GIVEN_WIDTH_AND_HEIGHT. Fit to given width and 
			 * height.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly fitGivenWidthAndHeight: Adobe.Indesign.FitMethodSettings;
			/**
			 * Alias for FIT_PREDEFINED_SETTINGS. Fit to predefined 
			 * settings.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 * @readonly
			 */
			public static readonly fitPredefinedSettings: Adobe.Indesign.FitMethodSettings;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}