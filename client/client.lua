local QBCore = exports['qb-core']:GetCoreObject()

-- NUI Callback
RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
end)

-- Command
RegisterCommand('vue', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'open',
    })
end, false)
