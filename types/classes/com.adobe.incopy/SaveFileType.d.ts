/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SaveFileType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Saves the file as an InCopy document with an ICML extension.
			 */
			public static readonly INCOPY_MARKUP: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as an InCopy template with an INCT extension.
			 */
			public static readonly INCOPY_TEMPLATE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for INCOPY_MARKUP. Saves the file as an InCopy 
			 * document with an ICML extension.
			 */
			public static readonly incopyMarkup: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for INCOPY_TEMPLATE. Saves the file as an InCopy 
			 * template with an INCT extension.
			 */
			public static readonly incopyTemplate: Adobe.Incopy.SaveFileType;
			/** Saves the file in the application's native file type. */
			public static readonly NATIVE_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for NATIVE_FILE_TYPE. Saves the file in the 
			 * application's native file type.
			 */
			public static readonly nativeFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as an InDesign document (with the file 
			 * extension INDD).
			 */
			public static readonly PUBLICATION_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for PUBLICATION_FILE_TYPE. Saves the file as an 
			 * InDesign document (with the file extension INDD).
			 */
			public static readonly publicationFileType: Adobe.Incopy.SaveFileType;
			/**
			 * Saves the file as a rich text format file with an RTF 
			 * extension.
			 */
			public static readonly RTF_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for RTF_FILE_TYPE. Saves the file as a rich text 
			 * format file with an RTF extension.
			 */
			public static readonly rtfFileType: Adobe.Incopy.SaveFileType;
			/** Saves the file as a text file with a TXT extension. */
			public static readonly TEXT_FILE_TYPE: Adobe.Incopy.SaveFileType;
			/**
			 * Alias for TEXT_FILE_TYPE. Saves the file as a text file with 
			 * a TXT extension.
			 */
			public static readonly textFileType: Adobe.Incopy.SaveFileType;
			/** Constructor */
			public constructor();
		}
	}
}