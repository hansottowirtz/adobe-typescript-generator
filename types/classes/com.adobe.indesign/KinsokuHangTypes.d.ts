/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KinsokuHangTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Enables hanging punctuation but forces hanging punctuation 
			 * outside the text frame and does not allow the punctuation to 
			 * be placed on the text frame.
			 */
			public static readonly KINSOKU_HANG_FORCE: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Enables hanging punctuation and allows punctuation marks to 
			 * be placed on or outside the text frame but allows burasagari 
			 * characters to hang as little as possible. Note: Differs for 
			 * justified and nonjustified text. For information on 
			 * justification, see line alignment.
			 */
			public static readonly KINSOKU_HANG_REGULAR: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_FORCE. Enables hanging punctuation 
			 * but forces hanging punctuation outside the text frame and 
			 * does not allow the punctuation to be placed on the text 
			 * frame.
			 */
			public static readonly kinsokuHangForce: Adobe.Indesign.KinsokuHangTypes;
			/**
			 * Alias for KINSOKU_HANG_REGULAR. Enables hanging punctuation 
			 * and allows punctuation marks to be placed on or outside the 
			 * text frame but allows burasagari characters to hang as 
			 * little as possible. Note: Differs for justified and 
			 * nonjustified text. For information on justification, see 
			 * line alignment.
			 */
			public static readonly kinsokuHangRegular: Adobe.Indesign.KinsokuHangTypes;
			/** Alias for NONE. Disables hanging punctuation. */
			public static readonly none: Adobe.Indesign.KinsokuHangTypes;
			/** Disables hanging punctuation. */
			public static readonly NONE: Adobe.Indesign.KinsokuHangTypes;
			/** Constructor */
			public constructor();
		}
	}
}