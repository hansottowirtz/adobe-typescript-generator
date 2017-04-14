/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentArtboardLayout extends IllustratorEnumBase {
			/** Arrange artboards in a single column. */
			public static readonly Column: DocumentArtboardLayout;
			public static readonly enumCache: CSEnumSharedCache;
			/** Arrange artboards in Grid by Column pattern. */
			public static readonly GridByCol: DocumentArtboardLayout;
			/** Arrange artboards in Grid by Row pattern. */
			public static readonly GridByRow: DocumentArtboardLayout;
			/**
			 * Arrange artboards in Grid by Column pattern from 
			 * right-to-left.
			 */
			public static readonly RLGridByCol: DocumentArtboardLayout;
			/**
			 * Arrange artboards in Grid by Row pattern from right-to-left.
			 */
			public static readonly RLGridByRow: DocumentArtboardLayout;
			/** Arrange artboards in a single row from right-to-left. */
			public static readonly RLRow: DocumentArtboardLayout;
			/** Arrange artboards in a single row. */
			public static readonly Row: DocumentArtboardLayout;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}