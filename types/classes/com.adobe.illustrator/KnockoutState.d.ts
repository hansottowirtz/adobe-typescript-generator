/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class KnockoutState extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.KnockoutState}
			 * @readonly
			 */
			public static readonly DISABLED: Adobe.Illustrator.KnockoutState;
			/**
			 * @type {Adobe.Illustrator.KnockoutState}
			 * @readonly
			 */
			public static readonly ENABLED: Adobe.Illustrator.KnockoutState;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.KnockoutState}
			 * @readonly
			 */
			public static readonly INHERITED: Adobe.Illustrator.KnockoutState;
			/**
			 * @type {Adobe.Illustrator.KnockoutState}
			 * @readonly
			 */
			public static readonly Unknown: Adobe.Illustrator.KnockoutState;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}