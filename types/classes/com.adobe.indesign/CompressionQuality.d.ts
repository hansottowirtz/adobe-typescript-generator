/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CompressionQuality extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses 8-bit compression. Valid only when bitmap compression 
			 * is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly EIGHT_BIT: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for EIGHT_BIT. Uses 8-bit compression. Valid only when 
			 * bitmap compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly eightBit: Adobe.Indesign.CompressionQuality;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses 4-bit compression. Valid only when bitmap compression 
			 * is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly FOUR_BIT: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for FOUR_BIT. Uses 4-bit compression. Valid only when 
			 * bitmap compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly fourBit: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for HIGH. Uses high compression. Not valid when bitmap 
			 * compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly high: Adobe.Indesign.CompressionQuality;
			/**
			 * Uses high compression. Not valid when bitmap compression is 
			 * ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly HIGH: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for LOW. Uses low compression. Not valid when bitmap 
			 * compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly low: Adobe.Indesign.CompressionQuality;
			/**
			 * Uses low compression. Not valid when bitmap compression is 
			 * ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly LOW: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for MAXIMUM. Uses maximum compression. Not valid when 
			 * bitmap compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly maximum: Adobe.Indesign.CompressionQuality;
			/**
			 * Uses maximum compression. Not valid when bitmap compression 
			 * is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly MAXIMUM: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for MEDIUM. Uses medium compression. Not valid when 
			 * bitmap compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly medium: Adobe.Indesign.CompressionQuality;
			/**
			 * Uses medium compression. Not valid when bitmap compression 
			 * is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly MEDIUM: Adobe.Indesign.CompressionQuality;
			/**
			 * Alias for MINIMUM. Uses minimum compression. Not valid when 
			 * bitmap compression is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly minimum: Adobe.Indesign.CompressionQuality;
			/**
			 * Uses minimum compression. Not valid when bitmap compression 
			 * is ZIP.
			 * @type {Adobe.Indesign.CompressionQuality}
			 * @readonly
			 */
			public static readonly MINIMUM: Adobe.Indesign.CompressionQuality;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}