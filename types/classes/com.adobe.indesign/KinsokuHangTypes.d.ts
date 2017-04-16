/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KinsokuHangTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Enables hanging punctuation but forces hanging punctuation 
			 * outside the text frame and does not allow the punctuation to 
			 * be placed on the text frame.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly KINSOKU_HANG_FORCE: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Enables hanging punctuation and allows punctuation marks to 
			 * be placed on or outside the text frame but allows burasagari 
			 * characters to hang as little as possible. Note: Differs for 
			 * justified and nonjustified text. For information on 
			 * justification, see line alignment.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly KINSOKU_HANG_REGULAR: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_FORCE. Enables hanging punctuation 
			 * but forces hanging punctuation outside the text frame and 
			 * does not allow the punctuation to be placed on the text 
			 * frame.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly kinsokuHangForce: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_REGULAR. Enables hanging punctuation 
			 * and allows punctuation marks to be placed on or outside the 
			 * text frame but allows burasagari characters to hang as 
			 * little as possible. Note: Differs for justified and 
			 * nonjustified text. For information on justification, see 
			 * line alignment.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly kinsokuHangRegular: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Alias for NONE. Disables hanging punctuation.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Disables hanging punctuation.
			 * @type {Adobe.Indesign.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}