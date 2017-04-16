/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class BlendAnimationType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.BlendAnimationType}
			 * @readonly
			 */
			public static readonly INBUILD: Adobe.Illustrator.BlendAnimationType;
			/**
			 * @type {Adobe.Illustrator.BlendAnimationType}
			 * @readonly
			 */
			public static readonly INSEQUENCE: Adobe.Illustrator.BlendAnimationType;
			/**
			 * @type {Adobe.Illustrator.BlendAnimationType}
			 * @readonly
			 */
			public static readonly NOBLENDANIMATION: Adobe.Illustrator.BlendAnimationType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}