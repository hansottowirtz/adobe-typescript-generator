/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KentenAlignment extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Aligns kenten with the center of parent charactrers.
			 * @type {Adobe.Incopy.KentenAlignment}
			 * @readonly
			 */
			public static readonly ALIGN_KENTEN_CENTER: Adobe.Incopy.KentenAlignment;
			/**
			 * Aligns kenten with the left of parent characters.
			 * @type {Adobe.Incopy.KentenAlignment}
			 * @readonly
			 */
			public static readonly ALIGN_KENTEN_LEFT: Adobe.Incopy.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_CENTER. Aligns kenten with the center 
			 * of parent charactrers.
			 * @type {Adobe.Incopy.KentenAlignment}
			 * @readonly
			 */
			public static readonly alignKentenCenter: Adobe.Incopy.KentenAlignment;
			/**
			 * Alias for ALIGN_KENTEN_LEFT. Aligns kenten with the left of 
			 * parent characters.
			 * @type {Adobe.Incopy.KentenAlignment}
			 * @readonly
			 */
			public static readonly alignKentenLeft: Adobe.Incopy.KentenAlignment;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}