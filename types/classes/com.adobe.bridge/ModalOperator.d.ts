/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		/**
		 * An independant node-handling operation with its own user 
		 * interface.See ProgressOperator for details of Operator 
		 * objects.
		 */
		class ModalOperator extends Adobe.Csawlib.CSHostObject {
			/**
			 * When true, the user has requested that the operation be 
			 * canceled.
			 */
			public cancelRequested: any;
			/**
			 * A string describing the current file-system conflict that 
			 * prevents the operation from being performed. Can identify 
			 * one of the preset Adobe Bridge error messages, or can be an 
			 * arbitrary descriptive string. Preset messages are identified 
			 * by the following string values: none, deleteFile, 
			 * deleteMultipleFiles, deleteReadOnlyFile, moveReadOnlyFile, 
			 * readOnlyFileExists, fileExists, fileIsBusy, 
			 * targetFolderExists, fatalErrorSameFile, 
			 * fatalErrorSameFolder, fatalErrorMoveToChild, 
			 * fatalErrorSourceNotAvailable, fatalErrorStorageFull, 
			 * fatalErrorSourceAccessDenied, fatalErrorTargetAccessDenied, 
			 * fatalErrorUnknown, noXMPSupport, undoDelete, messageCustom
			 */
			public conflictMessage: any;
			/**
			 * The type of the current file-system conflict encountered 
			 * during the operation. One of: none, 
			 * userConfirmationRequired, fatal
			 */
			public conflictType: any;
			/** A description of the operation, suitable for display. */
			public description: any;
			/** When operationStatus is inError, the problematic thumbnail. */
			public errorTarget: Adobe.Bridge.Thumbnail;
			/**
			 * Implement a method that returns a description of a 
			 * file-system conflict that prevents the operation from being 
			 * performed on the current thumbnail. The string can identify 
			 * one of the preset Adobe Bridge error messages, or can be an 
			 * arbitrary descriptive string suitable for display in a 
			 * conflict-resolution dialog. Preset messages are identified 
			 * by the following string values: readOnlyFile, 
			 * readOnlyFileExists, targetFolderExists, fileExists, 
			 * sameFile, sameFolder, moveToChild, sourceNotAvailable, 
			 * storageFull, sourceAccessDenied, targetAccessDenied, unknown
			 */
			public getConflictInfo: any;
			public getOperationStatus: any;
			/**
			 * Implement a method that returns the percentage of the 
			 * operation that has currently been completed, for use in 
			 * displaying the Progress dialog. Adobe Bridge invokes this 
			 * when it needs to update the Progress bar. Return a number in 
			 * the range [0..100].
			 */
			public getPercentageComplete: any;
			/**
			 * Implement a method that returns the number of source nodes 
			 * that have been processed so far. Return a number.
			 */
			public getProcessedNodeCount: any;
			/**
			 * Implement a method that returns the current overall status 
			 * of the operation with respect to Adobe Bridge. Describes 
			 * whether the operation has begun, is still going on, has been 
			 * paused by the user, or has finished. Return one of the 
			 * following string values: notStarted, inProgress, 
			 * awaitingResume, completed
			 */
			public getProcessingStatus: any;
			/**
			 * Implement a method that returns a message suitable for 
			 * display in the Progress dialog. Return a string.
			 */
			public getProgressMessage: any;
			public getPurpose: any;
			/**
			 * Implement a method that returns the current number of bytes 
			 * that have been transferred to the target in the course of 
			 * this operation. Return a number.
			 */
			public getTotalBytesTransferred: any;
			/**
			 * Implement a method that returns the total number of source 
			 * nodes to be operated on. Return a number.
			 */
			public getTotalNodeCount: any;
			/**
			 * Implement a method that returns the subclass type of this 
			 * operator. Return a string, modal or progress.
			 */
			public getType: any;
			public getUIPolicy: any;
			/**
			 * When sources has a value, an array of the same length 
			 * containing the new name strings to be assigned to the source 
			 * Thumbnail objects after they are transfered to the target.
			 */
			public newNames: any;
			/**
			 * The status of the operation with respect to the immediate 
			 * action. Also returned by getOperationStatus(). One of: 
			 * incomplete, inCancellation, inConflict, inError, succeeded, 
			 * cancelled, failed
			 */
			public operationStatus: any;
			/**
			 * How much of the operation has currently been completed, in 
			 * the range [0..100].
			 */
			public percentageComplete: any;
			/**
			 * The current overall status of the operation with respect to 
			 * Adobe Bridge. Reports whether the operation has begun, is 
			 * still going on, has been paused by the user, or has 
			 * finished. Also returned by the getProcessingStatus(). One 
			 * of: notStarted, inProgress, awaitingResume, completed
			 */
			public processingStatus: any;
			/**
			 * A description of the current state of the operation, 
			 * suitable for display. Also returned by 
			 * getProgressMessage()..
			 */
			public progressMessage: any;
			/**
			 * Implement a method that resolves a file-system conflict, as 
			 * identified by the conflictType and conflictMessage values. 
			 * Adobe Bridge invokes this after the user makes selections in 
			 * a conflict-resolution dialog, passing in the user’s choices. 
			 * See Adobe Bridge JavaScript Reference for additional 
			 * details.
			 */
			public resolveConflict: any;
			/**
			 * How to resolve file-system conflicts. This is for the 
			 * developer's information in a ModalOperator or when UI is 
			 * suppressed; Adobe Bridge does not check it. One of: abort, 
			 * noOverride, override, overrideConditionally
			 */
			public resolveMethod: any;
			/**
			 * How to apply the conflict-resolution method, 
			 * applyForOneConflictOnly or applyToAllConflicts This is for 
			 * the developer's information in a ModalOperator or when UI is 
			 * suppressed; Adobe Bridge does not check it.
			 */
			public resolvePolicy: any;
			/**
			 * An optional result for an operation, such as the path that 
			 * results from a createNewContainer() operation.
			 */
			public result: any;
			/**
			 * Implement a method that restarts the operation after it has 
			 * been stopped by user interaction. Return true if the 
			 * operation has been successfully restarted.
			 */
			public resume: any;
			public showUi: any;
			/** A set of Thumbnail objects that the operation acts upon. */
			public sources: any;
			/**
			 * Implement a method that initiates the operation. Adobe 
			 * Bridge invokes this after the operator has been enqueued. 
			 * For a modal operator, the method should return when the 
			 * operation is complete. For a progress operator, the method 
			 * should begin the background task and return. Return 
			 * undefined.
			 */
			public start: any;
			/**
			 * Implement a method that terminates the operation. Adobe 
			 * Bridge invokes this after the operation has been stopped by 
			 * user interaction. Return undefined.
			 */
			public stop: any;
			/** A target Thumbnail object for the operation. */
			public target: Adobe.Bridge.Thumbnail;
			/**
			 * A number of milliseconds to wait before aborting the 
			 * operation. Default is 0, meaning that the operation does not 
			 * time out.
			 */
			public timeout: any;
		}
	}
}