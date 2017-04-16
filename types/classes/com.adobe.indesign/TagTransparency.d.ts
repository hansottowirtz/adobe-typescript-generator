/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TagTransparency extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default setting. For information, see display 
			 * performance preferences.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.TagTransparency;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default setting. For 
			 * information, see display performance preferences.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.TagTransparency;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Displays higher-resolution (144 dpi) drop shadows and 
			 * feathers, CMYK mattes, and spread isolation.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly HIGH_QUALITY: Adobe.Indesign.TagTransparency;
			/**
			 * Alias for HIGH_QUALITY. Displays higher-resolution (144 dpi) 
			 * drop shadows and feathers, CMYK mattes, and spread 
			 * isolation.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly highQuality: Adobe.Indesign.TagTransparency;
			/**
			 * Displays basic transparency (opacity and blend modes) and 
			 * shows transparency effects such as drop shadow and 
			 * feathering in a low-resolution approximation. Note: Does not 
			 * isolate page content from the background. Objects with blend 
			 * modes other than Normal might appear different in other 
			 * applications and output.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly LOW_QUALITY: Adobe.Indesign.TagTransparency;
			/**
			 * Alias for LOW_QUALITY. Displays basic transparency (opacity 
			 * and blend modes) and shows transparency effects such as drop 
			 * shadow and feathering in a low-resolution approximation. 
			 * Note: Does not isolate page content from the background. 
			 * Objects with blend modes other than Normal might appear 
			 * different in other applications and output.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly lowQuality: Adobe.Indesign.TagTransparency;
			/**
			 * Displays drop shadows and feathering in low resolution.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly MEDIUM_QUALITY: Adobe.Indesign.TagTransparency;
			/**
			 * Alias for MEDIUM_QUALITY. Displays drop shadows and 
			 * feathering in low resolution.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly mediumQuality: Adobe.Indesign.TagTransparency;
			/**
			 * Alias for OFF. Turns off the on-screen display of 
			 * transparency. Note: Does not turn off transparency when 
			 * printing or exporting the file.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly off: Adobe.Indesign.TagTransparency;
			/**
			 * Turns off the on-screen display of transparency. Note: Does 
			 * not turn off transparency when printing or exporting the 
			 * file.
			 * @type {Adobe.Indesign.TagTransparency}
			 * @readonly
			 */
			public static readonly OFF: Adobe.Indesign.TagTransparency;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}