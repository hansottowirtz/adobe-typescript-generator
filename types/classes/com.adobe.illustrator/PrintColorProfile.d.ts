/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintColorProfile extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.PrintColorProfile}
			 * @readonly
			 */
			public static readonly CUSTOMPROFILE: Adobe.Illustrator.PrintColorProfile;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PrintColorProfile}
			 * @readonly
			 */
			public static readonly OLDSTYLEPROFILE: Adobe.Illustrator.PrintColorProfile;
			/**
			 * @type {Adobe.Illustrator.PrintColorProfile}
			 * @readonly
			 */
			public static readonly PRINTERPROFILE: Adobe.Illustrator.PrintColorProfile;
			/**
			 * @type {Adobe.Illustrator.PrintColorProfile}
			 * @readonly
			 */
			public static readonly SOURCEPROFILE: Adobe.Illustrator.PrintColorProfile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}