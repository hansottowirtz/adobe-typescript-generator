/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class DocumentArtboardLayout extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Arrange artboards in a single column. */
			public static readonly Column: Adobe.Illustrator.DocumentArtboardLayout;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Arrange artboards in Grid by Column pattern. */
			public static readonly GridByCol: Adobe.Illustrator.DocumentArtboardLayout;
			/** Arrange artboards in Grid by Row pattern. */
			public static readonly GridByRow: Adobe.Illustrator.DocumentArtboardLayout;
			/**
			 * Arrange artboards in Grid by Column pattern from 
			 * right-to-left.
			 */
			public static readonly RLGridByCol: Adobe.Illustrator.DocumentArtboardLayout;
			/**
			 * Arrange artboards in Grid by Row pattern from right-to-left.
			 */
			public static readonly RLGridByRow: Adobe.Illustrator.DocumentArtboardLayout;
			/** Arrange artboards in a single row from right-to-left. */
			public static readonly RLRow: Adobe.Illustrator.DocumentArtboardLayout;
			/** Arrange artboards in a single row. */
			public static readonly Row: Adobe.Illustrator.DocumentArtboardLayout;
			/** Constructor */
			public constructor();
		}
	}
}