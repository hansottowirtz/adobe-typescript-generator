/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AcrobatCompatibility extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Makes the file compatible with Acrobat 4.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly ACROBAT_4: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Makes the file compatible with Acrobat 5.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly ACROBAT_5: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Makes the file compatible with Acrobat 6.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly ACROBAT_6: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Makes the file compatible with Acrobat 7.0 or higher.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly ACROBAT_7: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Acrobat 8.0 compatibility.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly ACROBAT_8: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_4. Makes the file compatible with Acrobat 
			 * 4.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly acrobat4: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_5. Makes the file compatible with Acrobat 
			 * 5.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly acrobat5: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_6. Makes the file compatible with Acrobat 
			 * 6.0 and later.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly acrobat6: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_7. Makes the file compatible with Acrobat 
			 * 7.0 or higher.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly acrobat7: Adobe.Incopy.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_8. Acrobat 8.0 compatibility.
			 * @type {Adobe.Incopy.AcrobatCompatibility}
			 * @readonly
			 */
			public static readonly acrobat8: Adobe.Incopy.AcrobatCompatibility;
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