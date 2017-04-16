/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorProfile extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ColorProfile}
			 * @readonly
			 */
			public static readonly INCLUDEALLPROFILE: Adobe.Illustrator.ColorProfile;
			/**
			 * @type {Adobe.Illustrator.ColorProfile}
			 * @readonly
			 */
			public static readonly INCLUDEDESTPROFILE: Adobe.Illustrator.ColorProfile;
			/**
			 * @type {Adobe.Illustrator.ColorProfile}
			 * @readonly
			 */
			public static readonly INCLUDERGBPROFILE: Adobe.Illustrator.ColorProfile;
			/**
			 * @type {Adobe.Illustrator.ColorProfile}
			 * @readonly
			 */
			public static readonly LEAVEPROFILEUNCHANGED: Adobe.Illustrator.ColorProfile;
			/**
			 * @type {Adobe.Illustrator.ColorProfile}
			 * @readonly
			 */
			public static readonly None: Adobe.Illustrator.ColorProfile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}