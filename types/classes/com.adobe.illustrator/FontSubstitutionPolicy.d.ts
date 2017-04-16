/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FontSubstitutionPolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.FontSubstitutionPolicy}
			 * @readonly
			 */
			public static readonly SUBSTITUTEDEVICE: Adobe.Illustrator.FontSubstitutionPolicy;
			/**
			 * @type {Adobe.Illustrator.FontSubstitutionPolicy}
			 * @readonly
			 */
			public static readonly SUBSTITUTEOBLIQUE: Adobe.Illustrator.FontSubstitutionPolicy;
			/**
			 * @type {Adobe.Illustrator.FontSubstitutionPolicy}
			 * @readonly
			 */
			public static readonly SUBSTITUTETINT: Adobe.Illustrator.FontSubstitutionPolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}