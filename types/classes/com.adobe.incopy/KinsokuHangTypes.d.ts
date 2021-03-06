/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly KINSOKU_HANG_FORCE: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Enables hanging punctuation and allows punctuation marks to 
			 * be placed on or outside the text frame but allows burasagari 
			 * characters to hang as little as possible. Note: Differs for 
			 * justified and nonjustified text. For information on 
			 * justification, see line alignment.
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly KINSOKU_HANG_REGULAR: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_FORCE. Enables hanging punctuation 
			 * but forces hanging punctuation outside the text frame and 
			 * does not allow the punctuation to be placed on the text 
			 * frame.
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly kinsokuHangForce: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_REGULAR. Enables hanging punctuation 
			 * and allows punctuation marks to be placed on or outside the 
			 * text frame but allows burasagari characters to hang as 
			 * little as possible. Note: Differs for justified and 
			 * nonjustified text. For information on justification, see 
			 * line alignment.
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly kinsokuHangRegular: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Alias for NONE. Disables hanging punctuation.
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Disables hanging punctuation.
			 * @type {Adobe.Incopy.KinsokuHangTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.KinsokuHangTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}