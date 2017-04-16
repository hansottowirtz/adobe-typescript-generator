/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class UserInteractionLevel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.UserInteractionLevel}
			 * @readonly
			 */
			public static readonly DISPLAYALERTS: Adobe.Illustrator.UserInteractionLevel;
			/**
			 * @type {Adobe.Illustrator.UserInteractionLevel}
			 * @readonly
			 */
			public static readonly DONTDISPLAYALERTS: Adobe.Illustrator.UserInteractionLevel;
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