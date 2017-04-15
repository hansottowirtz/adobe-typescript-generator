/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** File naming options for the batch command. */
		class FileNamingType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Uses the date formatted as ddmm. */
			public static readonly DDMM: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as ddmmyy. */
			public static readonly DDMMYY: Adobe.Photoshop.FileNamingType;
			/** Use the document name in lower case. */
			public static readonly DOCUMENTNAMELOWER: Adobe.Photoshop.FileNamingType;
			/** Use the document name in mixed case. */
			public static readonly DOCUMENTNAMEMIXED: Adobe.Photoshop.FileNamingType;
			/** Use the document name in UPPER case. */
			public static readonly DOCUMENTNAMEUPPER: Adobe.Photoshop.FileNamingType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use the extension of the file in lower case. */
			public static readonly EXTENSIONLOWER: Adobe.Photoshop.FileNamingType;
			/** Use the extension of the file in UPPER case. */
			public static readonly EXTENSIONUPPER: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as mmdd. */
			public static readonly MMDD: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as mmddyy. */
			public static readonly MMDDYY: Adobe.Photoshop.FileNamingType;
			/** Use letter serial number lower case (a, b, c, ...) */
			public static readonly SERIALLETTERLOWER: Adobe.Photoshop.FileNamingType;
			/** Use letter serial number UPPER case (A, B, C, ...) */
			public static readonly SERIALLETTERUPPER: Adobe.Photoshop.FileNamingType;
			/** Use a 1-digit serial number. */
			public static readonly SERIALNUMBER1: Adobe.Photoshop.FileNamingType;
			/** Use a 2-digit serial number. */
			public static readonly SERIALNUMBER2: Adobe.Photoshop.FileNamingType;
			/** Use a 3-digit serial number. */
			public static readonly SERIALNUMBER3: Adobe.Photoshop.FileNamingType;
			/** Use a 4-digit serial number. */
			public static readonly SERIALNUMBER4: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as yyddmm. */
			public static readonly YYDDMM: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as yymmdd. */
			public static readonly YYMMDD: Adobe.Photoshop.FileNamingType;
			/** Uses the date formatted as yyyymmdd. */
			public static readonly YYYYMMDD: Adobe.Photoshop.FileNamingType;
			/** Constructor */
			public constructor();
		}
	}
}