/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KentenAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Aligns kenten with the center of parent charactrers. */
			public static readonly ALIGN_KENTEN_CENTER: Adobe.Indesign.KentenAlignment;
			/** Aligns kenten with the left of parent characters. */
			public static readonly ALIGN_KENTEN_LEFT: Adobe.Indesign.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_CENTER. Aligns kenten with the center 
			 * of parent charactrers.
			 */
			public static readonly alignKentenCenter: Adobe.Indesign.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_LEFT. Aligns kenten with the left of 
			 * parent characters.
			 */
			public static readonly alignKentenLeft: Adobe.Indesign.KentenAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}