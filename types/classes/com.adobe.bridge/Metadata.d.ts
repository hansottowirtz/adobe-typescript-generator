/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * This is external data associated with the file, such a 
		 * copyright owner, author, or camera settings.Access the 
		 * Metadata object for a file-type thumbnail through 
		 * Thumbnail.metadata . When a script needs to access the 
		 * metadata through the Thumbnail object, it is important to 
		 * make sure that the returned object contains the most current 
		 * data. To ensure this, your script should set 
		 * app.synchronousMode to true before attempting to retrieve 
		 * values through  Thumbnail.metadata , or else use  
		 * Thumbnail.synchronousMetadata . Keep in mind, however, that 
		 * metadata access is a time-intensive operation. Do not do it 
		 * unnecessarily, or as part of operations that occur very 
		 * frequently, such as a MenuItem onDisplay callback 
		 * function.The Metadata object does not support multi-valued 
		 * properties.
		 */
		class Metadata extends Adobe.Csawlib.CSHostObject {
			/**
			 * The current XMP namespace, used to search for XMP 
			 * properties.
			 */
			public namespace: string;
			public constructor();
			/**
			 * Adds metadata properties to this object that were saved to 
			 * an XMP template from the FileInfo dialog.
			 */
			public applyMetadataTemplate(): void;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Retrieves and returns the string value of a metadata 
			 * property in the specified namespace.
			 * @param {string} namespace 
			 * @param {string} uri 
			 */
			public read(namespace: string, uri: string): string;
			/** Serializes the XMP packet into a string. */
			public serialize(): string;
		}
	}
}