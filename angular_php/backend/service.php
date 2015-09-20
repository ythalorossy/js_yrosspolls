<?php
    include("PollManager.php");

    $jsonResult = "{}";

    switch ($_REQUEST['action']) {
        case 'getActive' :
            $poll = (new PollManager())->retrieveActive();
            $jsonResult = json_encode($poll);
        break;

        case 'getAllPolls':
            $result = array();
        
            $polls = (new PollManager())->retrieveAll();
            
            foreach ($polls as $val ) {
                
                $result[] = $val;
            } 
        
            $jsonResult = json_encode($result);
        break;
        
        case 'vote' :
            $item = json_decode($_REQUEST['item']);
        
            $pollManager = new PollManager();
            $itemManager = new ItemManager();

            $poll = $pollManager->retrieveById($item->idpoll);
            $item = $itemManager->retrieveById($item->id);
        
            $itemManager->incrementAmount($item, 1);
            $pollManager->incrementAmount($poll, 1);

            $poll = (new PollManager())->retrieveActive();
            $jsonResult = json_encode($poll);
        break;
        
        case 'savePoll' :
            $poll = PollManager::convertPollJSONToOject(json_decode($_REQUEST['poll']));
            
            $pollManager = new PollManager();
            
            if (is_null($poll->id)) {

                $poll = $pollManager->persist($poll);
                
            } else {
                
                $pollManager->update($poll);
            }

            $poll = (new PollManager())->retrieveById($poll->id);
            $jsonResult = json_encode($poll);
        break;
        
        case 'deleteItem' :
            $item = ItemManager::convertItemJSONToOject(json_decode($_REQUEST['item']));
        
            $itemManager = new ItemManager();
            $itemManager->retrieveById($item->id);
            
            $itemManager->delete($item);

            $pollManager = new PollManager();
            $poll = $pollManager->retrieveById($item->idpoll);
            $pollManager->incrementAmount($poll, $item->amount * (-1));
            $poll = $pollManager->retrieveById($item->idpoll);

            $jsonResult = json_encode($poll);
        break;
    }


    if (isset($_REQUEST['callback'])) {
    
        header('Content-Type: text/javascript, charset=UTF-8');
        echo $_REQUEST['callback']."($jsonResult)"; 
        
    } else {
     
        header("Content-type: application/json");
        echo $jsonResult; 
    }
    
?>


