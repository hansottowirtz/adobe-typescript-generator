/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ScreenMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ScreenMode}
			 * @readonly
			 */
			public static readonly DESKTOP: Adobe.Illustrator.ScreenMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ScreenMode}
			 * @readonly
			 */
			public static readonly FULLSCREEN: Adobe.Illustrator.ScreenMode;
			/**
			 * @type {Adobe.Illustrator.ScreenMode}
			 * @readonly
			 */
			public static readonly MULTIWINDOW: Adobe.Illustrator.ScreenMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}