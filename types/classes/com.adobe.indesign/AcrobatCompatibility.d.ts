/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AcrobatCompatibility extends Adobe.Csawlib.CSEnumBase {
			/** Makes the file compatible with Acrobat 4.0 and later. */
			public static readonly ACROBAT_4: Adobe.Indesign.AcrobatCompatibility;
			/** Makes the file compatible with Acrobat 5.0 and later. */
			public static readonly ACROBAT_5: Adobe.Indesign.AcrobatCompatibility;
			/** Makes the file compatible with Acrobat 6.0 and later. */
			public static readonly ACROBAT_6: Adobe.Indesign.AcrobatCompatibility;
			/** Makes the file compatible with Acrobat 7.0 or higher. */
			public static readonly ACROBAT_7: Adobe.Indesign.AcrobatCompatibility;
			/** Acrobat 8.0 compatibility. */
			public static readonly ACROBAT_8: Adobe.Indesign.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_4. Makes the file compatible with Acrobat 
			 * 4.0 and later.
			 */
			public static readonly acrobat4: Adobe.Indesign.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_5. Makes the file compatible with Acrobat 
			 * 5.0 and later.
			 */
			public static readonly acrobat5: Adobe.Indesign.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_6. Makes the file compatible with Acrobat 
			 * 6.0 and later.
			 */
			public static readonly acrobat6: Adobe.Indesign.AcrobatCompatibility;
			/**
			 * Alias for ACROBAT_7. Makes the file compatible with Acrobat 
			 * 7.0 or higher.
			 */
			public static readonly acrobat7: Adobe.Indesign.AcrobatCompatibility;
			/** Alias for ACROBAT_8. Acrobat 8.0 compatibility. */
			public static readonly acrobat8: Adobe.Indesign.AcrobatCompatibility;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}