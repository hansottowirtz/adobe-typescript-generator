/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KentenAlignment extends Adobe.Csawlib.CSEnumBase {
			/** Aligns kenten with the center of parent charactrers. */
			public static readonly ALIGN_KENTEN_CENTER: Adobe.Incopy.KentenAlignment;
			/** Aligns kenten with the left of parent characters. */
			public static readonly ALIGN_KENTEN_LEFT: Adobe.Incopy.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_CENTER. Aligns kenten with the center 
			 * of parent charactrers.
			 */
			public static readonly alignKentenCenter: Adobe.Incopy.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_LEFT. Aligns kenten with the left of 
			 * parent characters.
			 */
			public static readonly alignKentenLeft: Adobe.Incopy.KentenAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}