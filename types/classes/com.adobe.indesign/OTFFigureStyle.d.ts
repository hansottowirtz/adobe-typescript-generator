/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OTFFigureStyle extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Use the default figure style for the font.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for DEFAULT_VALUE. Use the default figure style for 
			 * the font.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.OTFFigureStyle;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use proportional width lining figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly PROPORTIONAL_LINING: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Use proportional width oldstyle figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly PROPORTIONAL_OLDSTYLE: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_LINING. Use proportional width lining 
			 * figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly proportionalLining: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_OLDSTYLE. Use proportional width 
			 * oldstyle figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly proportionalOldstyle: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Use monspaced lining figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly TABULAR_LINING: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Use monospaced oldstyle figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly TABULAR_OLDSTYLE: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for TABULAR_LINING. Use monspaced lining figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly tabularLining: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for TABULAR_OLDSTYLE. Use monospaced oldstyle figures.
			 * @type {Adobe.Indesign.OTFFigureStyle}
			 * @readonly
			 */
			public static readonly tabularOldstyle: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}